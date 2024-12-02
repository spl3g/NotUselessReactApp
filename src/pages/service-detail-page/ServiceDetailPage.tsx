import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getServiceAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { Service } from "../../types/Services";
import { Text } from "@consta/uikit/Text";
import { Avatar } from "@consta/uikit/Avatar";

const ServiceDetailPage = () => {
    const [service, setService] = useState<Service | null>(null);
    let { id } = useParams();

    useEffect(() => {
        getServiceAction(Number(id)).then((service) => {
            setService(service);
        });
    }, [id]);

    if (service === null) {
        return <Loader />;
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            <div style={{ display: "flex", gap: "1rem" }}>
                <Avatar
                    url={service.image}
                    form="default"
                    style={{
                        width: "128px",
                        height: "128px",
                        margin: "auto 0",
                        flexShrink: 0,
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                    }}
                >
                    <Text weight="semibold" size="3xl">
                        {service.name}
                    </Text>
                    <Text size="l">{service.description}</Text>
                    <Text
                        align="right"
                        view="secondary"
                        style={{ marginTop: "auto" }}
                    >
                        {new Date(service.createdAt).toDateString()}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
