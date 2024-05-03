"use client";
import { Button } from "../shared/Button";
import { logout } from "@/action";
import { Input } from "../shared/Input";
import { useState } from "react";
import styles from "./TodoView.module.sass";
import { redirect } from "next/navigation";

export const TodoView = () => {
  const [search, setSearch] = useState("");
  const handleLogOut = async () => {
    await logout();
    redirect('/login')
  };

  return (
    <div className={styles.Container}>
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
          <div className={styles.Todos__topSection}>
          <Input
          name="email"
          type="email"
          iconName="search"
          handleOnChange={() => {}}
          value={search}
          placeHolder="user@rapptrlabs.com"
          maxLength={50}
          errorMessage="Please enter a valid email address."
        ></Input>
            <Button style="primary">Add</Button>
          </div>
        </div>
      </main>

            
    </div>
    
  );
};
