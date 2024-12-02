import { NewsListData } from "../../types/News";
import { useEffect } from "react";
import { Loader } from "@consta/uikit/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../../store/news-slice";
import { RootState } from "../../store/store";
import { getNewsListAction } from "../../store/api-actions";

const MainPage = function () {
    const selectNews = (state: RootState) => state.news.news;
    const dispatch = useDispatch();
    const news = useSelector(selectNews);

    useEffect(() => {
        if (news.length === 0) {
            getNewsListAction().then((news) => dispatch(setNews(news)));
        }
    }, [dispatch, news]);

    return (
        <>
            {news ? (
                news.map((news) => (
                    <NewsListData
                        key={news.name}
                        name={news.name}
                        description={news.description}
                        createdAt={new Date(news.createdAt).toDateString()}
                    />
                ))
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MainPage;
