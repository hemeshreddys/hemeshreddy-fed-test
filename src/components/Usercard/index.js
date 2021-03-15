import React, { useEffect, useState } from "react";
import axios from "axios";
import * as style from "./style.js";
import CardItem from '../CardItem'

const Usercard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    let url = `https://randomuser.me/api/?results=4&page=${page}`;
    axios.get(url).then((res) => {
      setData([...data, ...res.data.results]);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    axios("https://randomuser.me/api/?results=4")
      .then((response) =>
        response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: `${user.email}`,
          image: `${user.picture.large}`,
          location: `${user.location.state}`,
        }))
      )
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
      <style.Container>
        {users.map((user,index) => (
            <CardItem key={index} imgurl={user.image} name={user.name} email={user.email} location={user.location}/> 
        ))}
        {data.map((article, index) => (
            <CardItem key={index} imgurl={article.picture.large} name={article.name.first + article.name.last} email={article.email} location={article.location.state}/> 
        ))}
        <style.Btn className="btn-primary" href="#" onClick={loadMoreData}>
          Load more
        </style.Btn>
      </style.Container>
  );
};

export default Usercard;
