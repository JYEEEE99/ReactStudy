// Hello는 클릭하면 얼럿을 나타내느 텍스트를 반환
const Hello = () => {
    // 클릭 시 호출되는 함수
    const onClikc = () => {
        alert('hello')
    }
    const text = 'Hello, React'
    return (
        // div의 onClikc에 클릭 시의 콜백 함수를 반환
        <div onClick={onClikc}>
            {text}
        </div>
    )
}
export default Hello