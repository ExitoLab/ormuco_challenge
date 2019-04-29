FROM python:3.6

RUN mkdir app

COPY . /app

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python"]

CMD ["app.py"]