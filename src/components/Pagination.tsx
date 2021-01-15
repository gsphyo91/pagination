import { PageBtn, PageWrap, PagePrev, PageNext } from "./Styled";

type Props = {
  pages: number[];
  currentPage: number;
  handleCurrentPage: (page: number) => void;
};

export default function Pagination({
  pages,
  currentPage,
  handleCurrentPage,
}: Props) {
  return (
    <PageWrap>
      {currentPage === 1 ? null : (
        <>
          <PagePrev onClick={() => handleCurrentPage(1)}>{"<<"}</PagePrev>
          <PageBtn onClick={() => handleCurrentPage(currentPage - 1)}>
            {"<"}
          </PageBtn>
        </>
      )}
      {pages.map((page, index) => (
        <PageBtn
          key={index}
          onClick={() => handleCurrentPage(page)}
          active={currentPage === page}
        >
          {page}
        </PageBtn>
      ))}
      {currentPage === pages.length ? null : (
        <>
          <PageBtn onClick={() => handleCurrentPage(currentPage + 1)}>
            {">"}
          </PageBtn>
          <PageNext onClick={() => handleCurrentPage(pages.length)}>
            {">>"}
          </PageNext>
        </>
      )}
    </PageWrap>
  );
}
