import { PatchNote } from "../interfaces/PatchNote";

const apiUrl = "https://my-plants-api.up.railway.app";

const PATCH_NOTES_TO_FETCH = 3;

export const getLastPatchNotes = async (): Promise<PatchNote[]> => {
  const { patchNotes } = await fetch(
    `${apiUrl}/info/patch-notes/${PATCH_NOTES_TO_FETCH}`
  ).then((res) => res.json());

  return patchNotes;
};
