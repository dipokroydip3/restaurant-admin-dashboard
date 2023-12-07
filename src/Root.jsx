import { Outlet } from "react-router-dom";
import AdminItem from "./AdminItem";
import AdminNav from "./AdminNav";


const Root = () => {
    return (
        <div>
            <AdminNav></AdminNav>
            {/* <h3>This is main page</h3> */}
            <div className="grid grid-cols-12 ">
                <div className="col-span-2  h-[92vh]">
                    <AdminItem></AdminItem>
                </div>
                <div className="col-span-10 bg-[#F0F0FA]">                 
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;