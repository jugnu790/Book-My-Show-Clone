import React from "react";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

export const NextArrow = (props) => {
	return(
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#0006",
					width:"50px",
					height:"40px",
					position:"absolute",
					right:"0",
					top:"0",
					transform:"translateY(170px)",
					borderRadius:"5px 5px",
					fontSize:"45px",
					zIndex:"2",
          color:"white",
          opacity:"0.7"
				}}
				onClick={props.onClick}
			>
				<span className="icon IoIosArrowForward"><IoIosArrowForward/></span>
			</div>
		</>
	);
}

export const PrevArrow = (props) => {
	return(
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#0006",
					width:"50px",
					height:"40px",
					position:"absolute",
					left:"0",
					top:"0",
					transform:"170px",
					borderRadius:"5px 5px",
					fontSize:"45px",
					zIndex:"2",
          transform:"translateY(170px)",
          color:"white",
          opacity:"0.7"
				}}
				onClick={props.onClick}
			>
      <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
			</div>
		</>
	);
}
