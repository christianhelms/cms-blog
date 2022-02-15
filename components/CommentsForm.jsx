import React, { useRef, useState, useEffect } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDatatEl = useRef();
  

  return (
    <div>
        <h1>
            CommentsForm
        </h1>
    </div>
  )
}

export default CommentsForm