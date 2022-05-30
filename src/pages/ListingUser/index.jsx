import { Button, Input, notification, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showErrorNotification } from "../../components/notification";
import { hsAxios } from "../../services/axiosBase";
import {
  createUsers,
  getUsersList,
  removeUser,
  updateUser,
} from "../../services/users/usersSlice";

export default function UserListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { usersList } = useSelector((state) => state.users);
  const [dataSource, setDataSource] = useState([]);
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    dispatch(getUsersList());
  }, [console.log("checked", newPass)]);
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "1",
    },
    {
      title: "Mobile Phone",
      dataIndex: "mobileNo",
      key: "2",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "3",
    },
    {
      title: "Action",
      key: "action",
      render: (record, index) => {
        return (
          <>
            <Space>
              <Button
                onClick={() => {
                  dispatch(removeUser(index));
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch(updateUser(index));
                }}
              >
                Edit
              </Button>
            </Space>
            <Input
              placeholder="New password"
              onChange={(record) => {
                setNewPass(record.target.value);
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div>User Listing</div>
      <Table
        columns={columns}
        dataSource={usersList.data}
      />
      <Button onClick={() => navigate("/userCreate")}>Create</Button>
    </>
  );
}