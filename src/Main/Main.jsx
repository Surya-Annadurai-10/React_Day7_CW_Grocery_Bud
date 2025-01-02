import styles from './Main.module.css'
import{useRef, useState} from "react"
import Card from '../Card/Card';
import Popup from '../Popup/Popup';

const Main = () =>{
  const [arr , setArr ] = useState([]);
  const [pop , setPop] = useState(false);
  const [word , setWord] = useState("");
  let inputRef = useRef(null);
  console.log(arr);
  
  const onClickBtn = () =>{
    let newVal = inputRef.current.value;
   setArr([...arr , newVal])
    inputRef.current.value = "";
    setPop(true); 
    setWord("added to the List")
  }

  const onClear =() =>{
    setArr([]);
    setWord("all deleted")
   

  }


    return (
        <>
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.inputbox}>
                    <input ref={inputRef} className={styles.input} type="text" />
                    <button onClick={onClickBtn} className={styles.btn}>Add Item</button>
                </div>
                <div className={styles.task_con}>
                    {
                        arr.map((ele,index) =>{
                            return <Card key={index} pop={pop} setWord={setWord} setPop={setPop} arr= {arr} ele = {ele} setArr={setArr}  idx = {index} />
                        })
                    }
                </div>
                <button onClick={onClear} className={styles["btn"]}>Clear All</button>
            </div>
            <div>
               
            </div>
            <Popup pop={pop} word = {word} />

        </main>
        </>
    )
}

export default Main;