
interface IProps {
    tag: string;
}

const Tag = ({tag}: IProps) => {
    return (
        <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary/70"
        >{tag}</span>
    );
}

export default Tag;