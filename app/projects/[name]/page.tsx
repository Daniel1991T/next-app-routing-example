interface Props {
  params: {
    name: string;
  };
}

const ProjectDetails = ({ params }: Props) => {
  return (
    <main>
      <h1>Project {params.name}</h1>
    </main>
  );
};
export default ProjectDetails;
