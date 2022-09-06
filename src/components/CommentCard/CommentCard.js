import React from "react";
import useFetch from "../../utils/useFetch";
import { useParams } from "react-router-dom";
import "./CommentCard.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function CommentCard() {
  const { data } = useFetch("http://localhost:8000/comments");
  const { id } = useParams();

  return (
    <div>
      {!!data?.length ? (
        data
          .filter((comments) => comments.id === id)
          .map((comments) => (
            <div className="container" key={comments.id}>
              <div className="from">
                <AccountBoxIcon />
                {comments.from}
              </div>
              <div className="comment">{comments.comment}</div>
            </div>
          ))
      ) : (
        <div>There are no comments to display</div>
      )}
    </div>
  );
}

export default CommentCard;
