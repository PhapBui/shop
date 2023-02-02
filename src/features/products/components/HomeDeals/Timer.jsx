import { styled } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { useCallback } from "react";

const Wrapper = styled("div")(({ theme }) => ({
  color: "rgb(120, 120, 120)",
  fontSize: "15px",
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
}));
const Item = styled("div")(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "1.6",
  margin: "0px 4px",
  padding: "0px 3px",
  backgroundColor: "rgb(255, 66, 78)",
  borderRadius: "4px",
  color: "white",
}));

const Divide = styled("div")(({ theme }) => ({
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "16px",
}));

const Timer = ({ timelife }) => {
  const Ref = useRef(null);

  const [hour, setHours] = useState("00");
  const [minute, setMinutes] = useState("00");
  const [second, setSeconds] = useState("00");

  const getTimeRemaining = (e) => {
    // @ts-ignore
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = useCallback((e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setHours(() => (hours > 9 ? hours.toString() : "0" + hours));
      setMinutes(() => (minutes > 9 ? minutes.toString() : "0" + minutes));
      setSeconds(() => (seconds > 9 ? seconds.toString() : "0" + seconds));
    }
  }, []);

  const clearTimer = useCallback(
    (e) => {
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    },
    [startTimer]
  );

  const getDeadTime = useCallback(() => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + timelife);
    return deadline;
  }, [timelife]);

  useEffect(() => {
    clearTimer(getDeadTime());
  }, [clearTimer, getDeadTime]);

  return (
    <Wrapper>
      <Item>{hour}</Item>
      <Divide>:</Divide>
      <Item>{minute}</Item>
      <Divide>:</Divide>
      <Item>{second}</Item>
    </Wrapper>
  );
};

export default Timer;
