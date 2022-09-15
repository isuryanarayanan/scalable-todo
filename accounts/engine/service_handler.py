""" Service handler allows different apps to connect to this app """


class ServiceHandler():
    """ Class that handles different services """

    service_a_url = "https://127.0.0.1:8080/tokens/"
    service_b_url = "https://127.0.0.1:8090/tokens/"

    def __init__(self, params):
        try:
            self.params = params
            getattr(self, self.params.service.lower())()
        except AttributeError:
            self.response = "Invalid Service Name"
            self.response_code = 400

    def service_a(self):
        """ Method that handles service A """
        self.response = "Service A"
        self.response_code = 200

    def service_b(self):
        """ Method that handles service B """
        self.response = "Service B"
        self.response_code = 200
