import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Avatar } from "@consta/uikit/Avatar";
import { useNavigate } from "react-router-dom";

export type Service = {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: string;
};

export const ServicesListData: React.FC<Service> = function ({
    id,
    name,
    description,
    image,
    createdAt,
}) {
    const navigate = useNavigate();
    return (
        <Card
            verticalSpace="m"
            horizontalSpace="m"
            style={{ position: "relative" }}
        >
            <Text
                weight="semibold"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/services/${id}`)}
            >
                {name}
            </Text>
            <hr />
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <Avatar
                    url={image}
                    name="service-image"
                    size="l"
                    style={{ flexShrink: 0 }}
                />
                <Text>{description}</Text>
            </div>
            <Text
                size="xs"
                align="right"
                view="ghost"
                style={{
                    position: "absolute",
                    bottom: "0.5rem",
                    right: "0.5rem",
                }}
            >
                {createdAt}
            </Text>
        </Card>
    );
};
