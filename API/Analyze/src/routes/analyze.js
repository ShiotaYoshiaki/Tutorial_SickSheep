import service from '../services/analyze';

export default (req, res) => {
    const { params } = req.params;
    const result = service(params);
    res.json(result);
}