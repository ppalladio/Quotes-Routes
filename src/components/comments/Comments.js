import { useState, useEffect,useCallback } from 'react';
import useHttp from '../../hooks/use-http';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { getAllComments } from '../../lib/api';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import Commentslist from './CommentsList';
const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const params = useParams()
    const { quoteId } = params;

    const {
        sendRequest,
        status,
        data: loadedComments,
    } = useHttp(getAllComments);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };
    

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);

    let comments;


    if (status === 'pending') {
        comments = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (status === 'completed' && loadedComments && loadedComments.length > 0) {
        comments = <Commentslist comments={loadedComments} />;
    }

    if (
        status === 'completed' &&
        (!loadedComments || loadedComments.length === 0)
    ) {
        comments = <p className="centered">No comments were added yet!</p>;
    }

    const addedCommentHandler = useCallback(() => {
      sendRequest(quoteId);
    }, [sendRequest, quoteId]);
    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm quoteId={quoteId} onAddedComment ={addedCommentHandler} />
            )}
            {comments}
        </section>
    );
};

export default Comments;
