'use client'
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./LoginView.module.sass"
import { emailPattern } from "@/utils/patterns";
import { handleLogin } from "@/action";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const emailText = event.target.value
    setEmail( emailText);
    setIsEmailValid(emailPattern.test(emailText))
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordText = event.target.value
    setPassword(passwordText);
    setIsPasswordValid(passwordText.length >= 4)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true)
    if (!isEmailValid || !isPasswordValid) {
        setIsSubmitting(false)
        setError('Please, fill all the input fields correctly please')
        return
    };
    const formData = new FormData(event.target)
    const response = await handleLogin(formData)
    window.localStorage.setItem('user', email)
    setError(response)
    setIsSubmitting(false)
  };
  return (
    <main className={styles.LoginView}>
      <form className={styles.LoginView__form} onSubmit={handleSubmit}>
        <h1 className={styles.LoginView__form__title}>Rapptr Labs</h1>
        <Input
          label="Email"
          name="email"
          type="email"
          iconName="email"
          handleOnChange={handleEmail}
          value={email}
          placeHolder="user@rapptrlabs.com"
          maxLength={50}
          errorMessage="Please enter a valid email address."
          isValid={isEmailValid}
        ></Input>
        <Input
          label="Password"
          type="password"
          iconName="password"
          name="password"
          handleOnChange={handlePassword}
          value={password}
          placeHolder="Must be at least 4 characters"
          minLength={4}
          maxLength={16}
          errorMessage="Please enter a valid password."
          isValid={isPasswordValid}
        ></Input>
        <Button type="submit" isDisabled={isSubmitting}>Login</Button>
        {error && <p className={styles.LoginView__form__error}>{error}</p>}
      </form>
    </main>
  );
};
