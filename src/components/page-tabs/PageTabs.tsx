import { useEffect, useState } from "react";
import { Tabs } from "@consta/uikit/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

type Item = {
    label: string;
    link: string;
};

const items: Item[] = [
    { label: "Главная страница", link: "/" },
    { label: "Услуги компании", link: "/services" },
];

const PageTabs = ({ linePosition }: { linePosition: "top" | "bottom" }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const location = useLocation();
    const navigate = useNavigate();

    const [value, setValue] = useState<Item | null>(
        items.find((i) => i.link === location.pathname) || null,
    );

    useEffect(() => {
        setValue(items.find((i) => i.link === location.pathname) || null);
    }, [location.pathname]);
    return (
        <Tabs
            value={value}
            onChange={(item) => {
                setValue(item);
                navigate(item.link);
            }}
            items={!user ? items.slice(0, -1) : items}
            linePosition={linePosition}
            view="clear"
        />
    );
};

export default PageTabs;
