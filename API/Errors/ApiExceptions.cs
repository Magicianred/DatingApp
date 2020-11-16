namespace API.Errors {
    public class ApiExceptions {

        public ApiExceptions (int status, string message = null, string details=null) {
            this.Status = status;
            this.Message = message;
            this.Details = details;
        }
        public int Status { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}