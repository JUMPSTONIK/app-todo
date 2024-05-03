"use client";
import { ChangeEvent, useState } from "react";
import styles from "./Input.module.sass";
import { Icon } from "../Icon";

interface InputProps {
  type?: "text" | "password" | "email";
  iconName?: "email" | "password" | "search";
  name: string;
  value: string;
  placeHolder: string;
  label?: string;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  isValid?: boolean;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const {
    type = "text",
    iconName,
    value,
    name,
    placeHolder,
    minLength,
    maxLength,
    label,
    errorMessage = "",
    handleOnChange,
    isValid = false,
  } = props;

  const [wasTouched, setWasTouched] = useState(false);
  const [inputType, setInputType] = useState(type);

  const showPassword = () => {
    if (type === "password") {
      if (inputType === "password") {
        setInputType("text");
      } else {
        setInputType("password");
      }
    }
  };

  const getToggleIcon = () => {
    if (inputType === "password") return "open-eye";
    return "closed-eye";
  };

  const showErrorMessage = () => {
    return errorMessage.length && wasTouched && !isValid;
  };

  return (
    <div className={styles.Field}>
      {label && <label className={styles.Field__label} htmlFor={name}>
        {label}
      </label>}
      <div className={styles.Field__wrapper}>

      <input
        className={styles.Field__wrapper__input}
        onChange={(event) => handleOnChange(event)}
        onBlur={() => setWasTouched(true)}
        placeholder={placeHolder}
        type={inputType}
        value={value}
        id={name}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
      />
      <div className={styles.Field__wrapper__mainIcon} onClick={showPassword}>
        <Icon type={iconName} />
      </div>
      {type === "password" && (
        <button type="button" className={styles.Field__wrapper__showPassword} onClick={showPassword}>
          <Icon type={getToggleIcon()} />
        </button>
      )}
      </div>
      {showErrorMessage() && (
        <p className={styles.Field__error}>{errorMessage}</p>
      )}
    </div>
  );
};
