import React from "react";
// import FormInput from "./FormInput";
// import FormTextarea from "./FormTextarea";
import TodoList from "./TodoList";
import UseEffect from "./UseEffect";
import Counter from "./Counter";

export default function Home() {
  return (
    <>
    <div className="col-6">

      <h1>Home</h1>
      {/* <FormInput />
      <FormTextarea /> */}
      <TodoList/>
      <UseEffect/>
      <Counter/>
      </div>
      
    </>
  );
}
