enum EntityActionType {
    Load,
    LoadSucceed,
    LoadFailed,
    LoadPending,
    Save,
    SaveSucceed,
    SaveFailed,
    SavePending,
    Delete,
    OpenDeleteConfirmation,
    CloseDeleteConfirmation,
    DeleteSucceed,
    DeleteFailed,
    DeletePending
}

export default EntityActionType;