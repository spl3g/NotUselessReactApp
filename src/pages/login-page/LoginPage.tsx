import { Button } from "@consta/uikit/Button";
import { TextField } from "@consta/uikit/TextField";
import { useState } from "react";
import { login, UserResp } from "../../store/api-actions";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user-slice";
import { useNavigate } from "react-router-dom";

type Status = "success" | "alert";

const LoginPage = () => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState<Status | undefined>(undefined);
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const navigate = useNavigate();

    function handleSignin() {
        login({
            username: username || "",
            password: password || "",
        })
            .then((resp) => {
                if ((resp.status = 200)) {
                    let respData = resp.data;
                    setStatus("success");
                    console.log("Success login");
                    dispatch(
                        setUser({
                            user: {
                                username: respData.username,
                                firstName: respData.firstName,
                                lastName: respData.lastName,
                                email: respData.email,
                                image: respData.image,
                            } as UserResp,
                            token: respData.accessToken,
                        }),
                    );
                    navigate("/");
                }
            })
            .catch(() => {
                setStatus("alert");
            });
    }

    return (
        <div
            style={{
                maxWidth: "50rem",
                margin: "0 auto",
                marginBottom: "1rem",
            }}
        >
            <TextField
                status={status}
                label="Логин"
                type="text"
                placeholder="Ваня"
                value={username}
                onChange={setUsername}
            />
            <TextField
                status={status}
                label="Пароль"
                placeholder="qwerty"
                type="password"
                value={password}
                onChange={setPassword}
            />
            <Button
                label="Войти"
                onClick={handleSignin}
                style={{ marginTop: "10px" }}
            />
        </div>
    );
};

export default LoginPage;
