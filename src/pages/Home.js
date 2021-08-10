import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import CardContainer from "../components/CardContainer";
import Center from "../components/Center";
import Card from "../components/Card";
import { filterTaskByType } from "../utils/filtersTask";
import Modal from "../components/Modal";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [save, setSave] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let url = "https://webtaskp.herokuapp.com/task";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log("erro api::  " + err));
    setSave(false);
  }, [save]);

  function Save() {
    setSave(true);
  }

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  const filterTasksTodo = filterTaskByType(tasks, "Todo");
  const filterTasksOpen = filterTaskByType(tasks, "Open");
  const filterTasksClose = filterTaskByType(tasks, "Close");

  function generateCard(filter) {
    if (filter.length === 0) return <h4>Não há tarefas</h4>;

    return filter.map((task, key) => {
      return (
        <Card
          key={key}
          id={task.id}
          title={task.title}
          desc={task.description}
          status={task.status}
          color={task.color}
          data={task.data}
          dataFinal={task.dataFinal}
          save={Save}
        />
      );
    });
  }
  return (
    <Container>
      <CardContainer title="Todo" openModal={openModal}>
        <Center>{generateCard(filterTasksTodo)}</Center>
      </CardContainer>

      <CardContainer title="Open">
        <Center>{generateCard(filterTasksOpen)}</Center>
      </CardContainer>

      <CardContainer title="Close">
        <Center>{generateCard(filterTasksClose)}</Center>
      </CardContainer>
      {modal && <Modal save={Save} close={closeModal} />}
    </Container>
  );
}

export default Home;
