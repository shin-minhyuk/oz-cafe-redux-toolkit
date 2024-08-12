import { createContext, useContext, useState } from "react";
import data from "../assets/data";

const menuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(data.menu);

  return (
    <menuContext.Provider value={{ menu, setMenu }}>
      {children}
    </menuContext.Provider>
  );
};

export function useMenu() {
  return useContext(menuContext);
}

// cartContext를 만들고, 사용할 위치에서 provider를 사용해서 감싸준다
// 전역 상태를 정의하고, value값으로 넣어준다.
// 사용할 위치에서 const {value,setValue} = useContext(cartContext)
// 이 과정을 모두 컨텍스트 스크립트 내부에서 함수로 설정
