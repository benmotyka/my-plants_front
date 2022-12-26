import { PatchNote } from "../interfaces/PatchNote";

const apiUrl = "https://my-plants-api.up.railway.app";

const PATCH_NOTES_TO_FETCH = 3;

export const getLastPatchNotes = async (
  language: string
): Promise<PatchNote[]> => {
  const { patchNotes } = await fetch(
    `${apiUrl}/info/patch-notes/${language}/${PATCH_NOTES_TO_FETCH}`
  ).then((res) => res.json());

  return patchNotes;
};
