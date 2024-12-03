"use client";

import { MouseEvent, useRef, useState } from "react";
import styles from "@/styles/form/Form.module.scss";

import Input from "@/app/components/form/Input";
import Textarea from "@/app/components/form/Textarea";
import Submit from "@/app/components/form/Submit";
import { checkEmail, checkName, checkSubject } from "@/utils/verifiers";

export default function Form() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLTextAreaElement | null>(null);

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!nameRef.current || !emailRef.current || !subjectRef.current) return;

    const name = checkName(nameRef.current.value);
    const email = checkEmail(emailRef.current.value);
    const subject = checkSubject(subjectRef.current.value);

    if (typeof name !== "undefined") return setErr(name);
    if (!email) return setErr("Insert a valid email address.");
    if (typeof subject !== "undefined") return setErr(subject);

    setErr("");
    alert("If it were a real site, it'll be send.");
  }

  function delaySubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      submit(e);
      setLoading(false);
    }, 1000);
  }

  return (
    <form action="" className={styles.form}>
      <div className={styles.form_inputs}>
        <div className={styles.input_wrapper}>
          <Input label="Name" id="name" type="text" refs={nameRef} />
        </div>
        <div className={styles.input_wrapper}>
          <Input label="Email" id="email" type="email" refs={emailRef} />
        </div>
        <div className={styles.input_wrapper}>
          <Textarea label="Subject" id="subject" max={255} refs={subjectRef} />
        </div>
      </div>

      {err && (
        <div className={styles.form_message}>
          <p>{err}</p>
        </div>
      )}

      <div className={styles.form_button}>
        <Submit
          text="SUBMIT"
          onClick={(e) => delaySubmit(e)}
          loading={loading}
          variant="v1"
        />
      </div>
    </form>
  );
}
