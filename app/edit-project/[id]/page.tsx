import { ProjectInterface } from "@/common.types";
import { Modal, ProjectForm } from "@/components";
import { PROJECT_ACTIONS } from "@/constants";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  if (!session?.user) redirect("/");
  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>
      <ProjectForm
        type={PROJECT_ACTIONS.edit}
        session={session}
        project={result?.project}
      />
    </Modal>
  );
};

export default EditProject;
