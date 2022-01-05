import React, { useRef, useState } from 'react';
import ListItem from 'components/ListItem';
import './list.scss'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

const List = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === "right" && slideNumber < 5){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  //Chose à mettre dans l'affichage de base (titre flèche etc...)
  return (
    <div className="list">
      {/*<ListTitle>Continue to Watch</ListTitle>*/}
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=> handleClick("left")} style={{ display: !isMoved && 'none' }}/>
        <div className="container" ref={listRef}>
          <ListItem index={0}></ListItem>
          <ListItem index={1}></ListItem>
          <ListItem index={2}></ListItem>
          <ListItem index={3}></ListItem>
          <ListItem index={4}></ListItem>
          <ListItem index={5}></ListItem>
          <ListItem index={6}></ListItem>
          <ListItem index={7}></ListItem>
          <ListItem index={8}></ListItem>
          <ListItem index={9}></ListItem>
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=> handleClick("right")}/>
      </div>
    </div>
  );
};

export default List;
