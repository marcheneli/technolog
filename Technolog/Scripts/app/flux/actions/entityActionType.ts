enum EntityActionType {
    InitEntityState,
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
    DeletePending,
    Change,
    Redo,
    Undo
}

export default EntityActionType;