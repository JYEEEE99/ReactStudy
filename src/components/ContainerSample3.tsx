import React from "react";
// React18 이후의 컴ㅍ넌트에 대한 타입 지정 방법.
// VFC가 비추천되어 FC에서 암묵적인 children의 정의가 사라졌다.
type ContainerProps = {
    title: string
    children: React.ReactNode
}
// Container는 빨간색 배경의 박스 안에 제목과 자식요소를 표시.
const Container: React.FC<ContainerProps> = (props) => {
    const {title, children} = props;
    return (
        <>
        <div style={{background: 'yellow'}}>
            <span>{title}</span>
            {/* props인 children을 삽입하면, 이 컴포넌트의 시작태구와 종료 태그로 감싼 요소를 표시한다. */}
            <div>{children}</div>
        </div>
        </>
    )
}
const Parent3 = () => {
    return (
        // Container를 사용할 때, 다른 요소를 감싸서 사용.
        <Container title="title">
            <p>이 부분이 배경색으로 둘러싸여 있습니다.</p>
        </Container>
    )
}
export default Parent3
// 하지만 FC도 다음과 같은 이유로 잘 사용되지 않는 경향이 있다.
// FC에서 암묵적으로 정의된 displayName이나 defaultProps는 최근에 사용되지 않거나 권장되지 않는다.
// props의 타입 정의에 제네릭을 사용하는 경우 FC에 적절한 타입을 지정할 수 없다.