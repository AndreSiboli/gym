"use client";

import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import styles from "./Form.module.scss";

import Input from "@/app/components/form/Input";
import Textarea from "@/app/components/form/Textarea";
import Submit from "@/app/components/form/Submit";

export default function Form() {
  const [err, setErr] = useState("");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLTextAreaElement | null>(null);

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!checkName()) return;
    if (!checkEmail()) {
      setErr("Insert a valid email address.");
      return;
    }
    if (!checkSubject()) return;

    setErr("");
    alert("If it were a real site, it'll be send.");
  }

  function checkName() {
    if (!nameRef.current) return;
    const { value } = nameRef.current;
    const regex = /\p{L}/gu;

    if (value.length < 2) return setErr("The name field is too short.");
    if (value.match(regex)?.length !== value.length)
      return setErr("The name field only accept letters.");
    return true;
  }

  function checkEmail() {
    if (!emailRef.current) return;
    const { value } = emailRef.current;
    const regex = /[a-z0-9.]/gi;

    if (!value) return false;
    if (value.match(/@/g)?.length !== 1) return false;
    const [root, domain] = value.split("@");

    //Checking the root
    if (root.match(regex)?.length !== root.length) return false;
    if (root.startsWith(".") || root.endsWith(".")) return false;

    const regexDots = /\.{2,}/;
    if (regexDots.test(root)) return false;

    //Checking domain
    if (domain.match(/[.]/g)?.length !== 1) return false;
    const [initial, com] = domain.split(".");

    if (!initial) return false;
    if (!com.endsWith("com")) return false;

    return true;
  }

  function checkSubject() {
    if (!subjectRef.current) return;
    const { value } = subjectRef.current;

    if (value.length === 0) return setErr("You need a subject.");
    if (value.length > 255) return setErr("Too many caracteres in subject.");
    return true;
  }

  return (
    <form action="" className={styles.form}>
      <div className={styles.form_input}>
        <Input label="Name" id="name" type="text" refs={nameRef} />
      </div>
      <div className={styles.form_input}>
        <Input label="Email" id="email" type="email" refs={emailRef} />
      </div>
      <div className={styles.form_input}>
        <Textarea label="Subject" id="subject" max={255} refs={subjectRef} />
      </div>
      {err && (
        <div className={styles.form_message}>
          <p>{err}</p>
        </div>
      )}
      <div className={styles.form_button}>
        <Submit text="SUBMIT" handleClick={(e) => submit(e)} />
      </div>
    </form>
  );
}
