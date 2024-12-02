import { Responses404 } from "@consta/uikit/Responses404";
import { Button } from "@consta/uikit/Button";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Responses404
                actions={
                    <Button
                        onClick={() => navigate("/")}
                        view="ghost"
                        label="На Главную"
                    />
                }
            />
        </>
    );
};

export default Page404;
