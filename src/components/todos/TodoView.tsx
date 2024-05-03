"use client";
import { Button } from "../shared/Button";
import { logout } from "@/action";
import { Input } from "../shared/Input";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./TodoView.module.sass";
import { redirect } from "next/navigation";
import { TodoItem } from "./TodoItem";

const USER = window.localStorage.getItem('user') as string;

export const TodoView = () => {

  useEffect(() => {

    const todos = window.localStorage.getItem(USER)
    if(todos){
      setTodos(JSON.parse(todos))
    }

  }, [])
  

  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [isAddingNewTodo, setIsAddingNewTodo] = useState(false);

  const handleLogOut = async () => {
    await logout();
    window.localStorage.removeItem('user')
  };

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const addTodo = () => {
    if (isAddingNewTodo) return;
    setTodos(["", ...todos]);
    setIsAddingNewTodo(true);
  };

  const getFilteredTodos = () => {
    return todos.filter((todo) => todo.includes(search));
  };

  const handleEdit = (todo: string, index: number) => {
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
    setIsAddingNewTodo(false);
    window.localStorage.setItem(USER, JSON.stringify(newTodos))
  };

  const handleDelete = (todo: string) => {
    const filteredTodos = todos.filter((item) => item !== todo)
    setTodos(todos.filter((item) => item !== todo));
    window.localStorage.setItem(USER, JSON.stringify(filteredTodos))
  };

  const setEditInitialState = (text: string) => {
    return text.length === 0 && isAddingNewTodo === true;
  };

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.Nav__btnWrapper}>
          <Button style="secondary" handleClick={handleLogOut}>
            logout
          </Button>
        </div>
      </nav>
      <main className={styles.Main}>
        <div className={styles.Todos}>
          <h1 className={styles.Todos__title}>My To-do List</h1>
          <section className={styles.Todos__topSection}>
            <Input
              name="search"
              iconName="search"
              handleOnChange={handleSearch}
              value={search}
              placeHolder="search"
            ></Input>
            <Button handleClick={addTodo} style="primary">
              New
            </Button>
          </section>
          <hr />
          <section className={styles.Todos__bottomSection}>
            {todos.length ? (
              getFilteredTodos().map((todo, index) => (
                <TodoItem
                  content={todo}
                  handleDelete={handleDelete}
                  setEdit={handleEdit}
                  index={index}
                  isFirstEdit={setEditInitialState(todo)}
                  key={todo}
                />
              ))
            ) : (
              <h2>Add your first To-do</h2>
            )}
          </section>
        </div>
      </main>
    </>
  );
};
