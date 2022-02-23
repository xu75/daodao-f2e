import React, {
  useMemo,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
// import useSWR from "swr";
// import useSWRImmutable from "swr/immutable";
import { Box } from "@mui/material";
import SearchResultList from "./SearchResultList";
import SearchField from "./SearchField";
// import { postFetcher } from "../../utils/fetcher";
import { bodyHandler } from "../../utils/notion";
import stringSanitizer from "../../utils/sanitizer";
import SelectedTags from "./SelectedTags";
import SelectedCategory from "./SelectedCategory";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SearchFooter from "./SearchFooter";
import { useSelector, useDispatch } from "react-redux";
import {
  loadSearchResult,
  loadNextSearchResult,
} from "../../redux/actions/search";
const SearchWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 80px);
  .header-title {
    font-size: 26px;
    font-weight: 500;
  }
`;

const Search = () => {
  const dispatch = useDispatch();
  const { results, isLoading, next_cursor, isLoadingNextData, has_more } =
    useSelector((state) => state?.search ?? {});
  const router = useRouter();
  const loadMoreButtonRef = useRef();
  useEffect(() => {
    if (router.isReady) {
      dispatch(loadSearchResult(bodyHandler(router.query)));
    }
  }, [dispatch, router.isReady, router.query]);
  // const { data = [] } = useSWRImmutable(
  //   [`https://api.daoedu.tw/notion/databases`, bodyHandler(query, nextCursor)],
  //   postFetcher
  // );
  // console.log("nextCursor", nextCursor);
  // const [previewList, setPreviewList] = useState(
  //   () => data?.payload?.results ?? []
  // );

  const queryTags = useMemo(
    () =>
      typeof router.query.tags === "string"
        ? stringSanitizer(router.query.tags).split(",")
        : [],
    [router?.query?.tags]
  );
  // const isLoadingPreviewList = useMemo(
  //   () => previewList.length === 0,
  //   [previewList]
  // );

  // useEffect(() => {
  //   if (
  //     Array.isArray(data?.payload?.results) &&
  //     data?.payload?.results.length > 0
  //   ) {
  //     setPreviewList((prevList) => [
  //       ...new Set([...prevList, ...(data?.payload?.results ?? [])]),
  //     ]);
  //   }
  // }, [data, setPreviewList]);

  const onIntersect = useCallback(() => {
    dispatch(loadNextSearchResult(bodyHandler(router?.query, next_cursor)));
  }, [dispatch, next_cursor, router?.query]);

  useIntersectionObserver({
    enabled: !isLoadingNextData && next_cursor && has_more,
    target: loadMoreButtonRef,
    onIntersect,
    threshold: 0.3,
  });

  console.log("isLoadingNextData", isLoadingNextData);

  return (
    <SearchWrapper>
      <SelectedCategory />
      <SearchField />
      <SelectedTags query={router.query} />
      <Box
        sx={{
          margin: "20px 0 20px 0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& > .header-result": {
            marginLeft: "20px",
            fontSize: "20px",
          },
        }}
      >
        <h1 className="header-title">搜尋結果</h1>
        {Array.isArray(results) && (
          <p className="header-result">
            共{results.length}筆{next_cursor && "以上"}
          </p>
        )}
      </Box>

      <SearchResultList
        list={results}
        isLoading={isLoading}
        isLoadingNextData={isLoadingNextData}
        queryTags={queryTags}
      />
      <SearchFooter
        hasMoredata={next_cursor}
        loadMoreButtonRef={loadMoreButtonRef}
        // isError={isError}
        // errorMessage={errorMessage}
      />
    </SearchWrapper>
  );
};

export default Search;
