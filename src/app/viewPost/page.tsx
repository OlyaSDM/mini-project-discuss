import Header from "@/components/header/page";
import React from "react";
import {Textarea} from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import styles from "@/components/styles.module.css"



export default function ViewPost() {
  return (
    <div>
      <Header />
<div className="flex flex-col items-center p-10">

    <h3 className={styles.alltitle}>Implementing Charts</h3>
    <p className={styles.application}>I'm trying to add a chart into my application, can anyone help me out?</p>

<Textarea
      placeholder="Enter your description"
      className={styles.textarea}
    />

    <Button 
    color="primary"
    variant="solid"
    size="md"
    radius="sm"
    type="submit"
    >Save</Button>
    <p className={styles.application}>All 20 comments</p>
    
    </div>
    </div>
  );
}


// className="application"

// import Block from 'react-blocks';
// npm install react-blocks
//function MyComponent() {
//  return (
//    <Block layout="horizontal">
//      <Block>Block 1</Block>
//      <Block>Block 2</Block>
//    </Block>
//  );