import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  left: 50%
  position: absolute;  
  bottom: 10 !important; 
  
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: rgb(226, 160, 110);
  color: white;
  font-size: 1rem;

  &:hover {
    background: rgb(252, 221, 167);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: rgb(226, 160, 110);
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: rgb(252, 221, 167);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;