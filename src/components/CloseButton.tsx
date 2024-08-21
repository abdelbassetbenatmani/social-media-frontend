import { useNavigate } from "react-router-dom";

const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <div 
        onClick={() => navigate("/",{replace:true})}
    className="fixed right-5 top-4">
      <span className="text-white material-symbols-outlined text-[40px] cursor-pointer">close</span>
    </div>
  );
};

export default CloseButton;
