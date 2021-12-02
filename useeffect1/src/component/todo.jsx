import { useEffect, useState } from "react";
import Pagination from "./pagination";
import TodoInput from "./todoInput";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onCreateTask = (value) => {
    const payload = {
      title: value,
      status: datas.length % 2 === 0 ? false : true
    };
    let config = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    fetch("https://thawing-oasis-54179.herokuapp.com/posts", config);
  };

  const handleSubmit = async (value) => {
    try {
      console.log("cllkdkdk");
      setIsLoading(true);
      await onCreateTask(value);
      await handleGetData();
    } catch (e) {
      console.log(e);
    }
  };

  const getData = (page = 1, limit = 5) => {
    return fetch(
      `https://thawing-oasis-54179.herokuapp.com/posts?_page=${page}}&_limit=${limit}}`
    ).then((res) => res.json());
  };
  useEffect(() => {
    handleGetData(page);
  }, [page]);
  const handleGetData = async (page) => {
    getData(page)
      .then((res) => {
        setDatas(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handlePagination = (value) => {
    setIsLoading(true);
    console.log("page...", page);
    setPage(value);
  };
  if (isLoading)
    return (
      <div>
        <h3>....loading</h3>
      </div>
    );
  return (
    <>
      <h1>Todo</h1>
      <TodoInput onCreateTask={handleSubmit} />
      <div>
        <ul>
          {datas.map((item) => (
            <TodoItem
              key={item.id}
              title={item.title}
              status={item.status}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div>
        <Pagination value={page} handlePagination={handlePagination} />
      </div>
    </>
  );
}
