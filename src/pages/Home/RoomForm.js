import styled from "styled-components";


const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  --parent-height: ${props => props.height};
  height: var(--parent-height);
  border-radius: 5px;
  transition: 0.3s;
  // box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
  margin-right: 20px;

  &:hover {
    transition: 0.3s;
    transform: translateX(10px);
    box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
    cursor: pointer;
  }
`;


const RoomDetail = styled.div`
  flex: 1;
  margin: 10px;
  height: calc(100% - 15% * 2);
`;


const RoomName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const RoomDescription = styled.div`
  font-size: 15px;
`;

const RoomImg = styled.img`
  height: 80%;
  width: calc(var(--parent-height) * 0.8);
  object-fill: cover;
  margin: 5px;
  border-radius: 10px;
  margin-left: 15px;
`;


export default function RoomForm({ name, desc, img, height }){
    return (
      <Room height={height}>
        <RoomImg src={img}></RoomImg>
        <RoomDetail>
          <RoomName>{name}</RoomName>
          <RoomDescription>{desc}</RoomDescription>
        </RoomDetail>
      </Room>
    );
  }