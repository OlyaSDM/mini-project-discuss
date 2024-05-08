import Header from "@/components/header/page";
import React from "react";
import { Button } from "@nextui-org/react";
import TopicList from "@/components/listTopic/page";
import PostList from "@/components/PostList/page";
import { db } from "@/db";
import { notFound } from "next/navigation";
import TopicListView from "@/components/listTopicView/page";
import styles from "@/components/styles.module.css";
import TopicSlugListView from "@/components/ListSlugTopicView/page";
import { deleteTopic } from "@/app/actions";

export default async function ViewTopic(props: any) {

  const { slug } = props.params;
  const topic = await db.topic.findFirst({
        where: {
            slug
        }
    });

    const deleteTopicAction = deleteTopic.bind(null, slug);

    if (!topic) {
        return notFound();
    }

    return (
          <div>
            <Header />
            <div className={styles.main_head}>
            <div className={styles.postmain}>
              <div className={styles.alltitle}>
                <TopicSlugListView topic={topic} />
                <PostList title="React" />
                </div>
              </div>
              <div className={styles.t}>
                <Button className={styles.button}>Create Post</Button>
      
                <TopicListView topic={topic} />
                <form action={deleteTopicAction}>
                      <Button className="border p-2 boreer-rounded" variant="flat" color="danger" type="submit" > delete this topic </Button>
                      {/* <button className="border p-2 boreer-rounded"> Delete </button> */}
                </form>
              </div>
            </div>
          </div>
        );
}