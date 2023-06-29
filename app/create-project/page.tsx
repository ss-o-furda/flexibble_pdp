import { Modal, ProjectForm } from "@/components";
import { PROJECT_ACTIONS } from "@/constants";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const CreateProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>
      <ProjectForm type={PROJECT_ACTIONS.create} session={session} />
    </Modal>
  );
};

export default CreateProject;
