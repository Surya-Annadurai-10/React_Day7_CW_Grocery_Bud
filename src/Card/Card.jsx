import { useRef } from 'react';
import styles from './Card.module.css'

const Card = (props) =>{
    console.log(props.arr);
    const checkRef = useRef(null);
    const onStrikeRef = useRef(null); 

    const onClickDel = (id) =>{
        console.log(id);
        let newArr = [...props.arr];
      newArr.splice(id , 1);
     let taskArr = JSON.parse(localStorage.getItem("task"));
     taskArr.splice(id,1);
     localStorage.setItem("task",JSON.stringify(taskArr));
        props.setArr(newArr);
        props.setPop(true);
        props.setWord("deleted");
    }

    const strike =() =>{
      onStrikeRef.current.style.textDecoration = "line-through" ;
      onStrikeRef.current.style.textDecorationColor = "black";
      onStrikeRef.current.style.textDecorationThickness = "2px"; 
    }

    const onCheck = () =>{
      checkRef.current.checked ? strike() : onStrikeRef.current.style.textDecoration = '';
    }
    
   return (
    <>
      <div className={styles.card_con}>
           <div className={styles.data}>
           <input onClick={onCheck} ref={checkRef}  type="checkbox" />
           <span ref={onStrikeRef} className={styles.task_tag}>{props.ele}</span>
           </div>
           <button className={styles.del} onClick={() => onClickDel(props.idx)}>Delete</button>
      </div>
    </>
   )
} 

export default Card;

