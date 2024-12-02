import { ServicesListData } from "../../types/Services";
import { useEffect } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../../store/services-slice";

const ServicePage = function () {
    const selectServices = (state: RootState) => state.services.services;
    const dispatch = useDispatch();
    const services = useSelector(selectServices);

    useEffect(() => {
        if (services.length === 0) {
            getServicesListAction().then((services) => {
                dispatch(setServices(services));
            });
        }
    }, [dispatch, services]);

    return (
        <div
            style={{
                maxWidth: "60rem",
                margin: "0 auto",
                marginBottom: "1rem",

                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
            }}
        >
            {services ? (
                services.map((services) => (
                    <ServicesListData
                        id={services.id}
                        key={services.name}
                        name={services.name}
                        description={services.description}
                        image={services.image}
                        createdAt={new Date(services.createdAt).toDateString()}
                    />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ServicePage;
