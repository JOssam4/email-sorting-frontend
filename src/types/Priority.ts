// @ts-expect-error we still want to use enums even though typescript throws an error
enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export default Priority;