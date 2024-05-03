"use client";
import { ChangeEvent, useState } from "react";
import { Icon } from "../shared/Icon";
import styles from "./TodoItem.module.sass";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";

export const TodoItem = (props: TodoProps) => {
  const { content, handleDelete, isFirstEdit, index, setEdit } = props;
  const [isEditing, setIsEditing] = useState(isFirstEdit);
  const [text, setText] = useState(content);
  const [isValid, setIsValid] = useState(true);

  const handleEdit = () => {
    if (text.length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setIsEditing(false);
    setEdit(text, index);
  };

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form className={styles.Todo}>
      {isEditing ? (
        <Input
          name="edit"
          handleOnChange={handleText}
          value={text}
          placeHolder="todo"
          errorMessage="your todo needs at least 1 character."
          isValid={isValid}
        />
      ) : (
        <p>{content}</p>
      )}
      <div
        className={
          !isEditing ? styles.Todo__iconWrapper : styles.Todo__buttonWrapper
        }
      >
        {!isEditing ? (
          <>
            <button onClick={() => setIsEditing(true)}>
              <Icon type="edit" />
            </button>
            <button onClick={() => handleDelete(content)}>
              <Icon type="delete" />
            </button>
          </>
        ) : (
          <Button handleClick={handleEdit}>Save</Button>
        )}
      </div>
    </form>
  );
};
