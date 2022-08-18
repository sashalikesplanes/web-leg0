export default (timestamp: string) => new Date(timestamp).toLocaleString().split(',')[0]
