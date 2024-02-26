import React from "react";
// Container의 타입을 정의한다.
type ContainerProps = {
    title: string
    children: React.ReactNode
}
// Container는 빨간색 배경의 박스 안에 제목과 자식요소를 표시.
const Container = (props: ContainerProps): JSX.Element => {
    const {title, children} = props;
    return (
        <>
        <div style={{background: 'blue'}}>
            <span>{title}</span>
            {/* props인 children을 삽입하면, 이 컴포넌트의 시작태구와 종료 태그로 감싼 요소를 표시한다. */}
            <div>{children}</div>
        </div>
        </>
    )
}
const Parent2 = () => {
    return (
        // Container를 사용할 때, 다른 요소를 감싸서 사용.
        <Container title="title">
            <p>이 부분이 배경색으로 둘러싸여 있습니다.</p>
        </Container>
    )
}
export default Parent2